<template>
  <q-card
    class="shadow-10"
    style="width: 100%; max-width: 420px; height: 480px; display: flex; flex-direction: column"
  >
    <q-card-section class="q-pb-none">
      <div class="text-h6">🚨 {{ lang === 'fr' ? 'Fuites de données récentes' : 'Recent data breaches' }}</div>
      <div class="text-caption text-grey">
        {{
          lang === 'fr'
            ? 'Entreprises françaises touchées récemment'
            : 'Recently affected French companies'
        }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-sm" style="flex: 1; overflow: hidden; padding-right: 0">
      <q-scroll-area style="height: 100%">
        <q-list separator class="q-pr-sm">
          <q-item
            v-for="(breach, index) in breaches"
            :key="index"
            class="q-pa-sm"
            :clickable="!!breach.source"
            :tag="breach.source ? 'a' : 'div'"
            :href="breach.source || undefined"
            :target="breach.source ? '_blank' : undefined"
            :rel="breach.source ? 'noopener noreferrer' : undefined"
          >
            <q-item-section>
              <q-item-label class="text-weight-bold text-body2">
                {{ breach.company }}
                <q-icon v-if="breach.source" name="open_in_new" size="xs" class="text-grey q-ml-xs" />
              </q-item-label>
              <q-item-label caption>
                📅 {{ formatDate(breach.date) }} · 
                <span class="text-negative text-weight-medium">
                  {{ formatRecords(breach.records) }}
                  {{ lang === 'fr' ? 'comptes' : 'accounts' }}
                </span>
              </q-item-label>
              <q-item-label caption class="q-mt-xs">
                <q-badge
                  v-for="dtype in breach.dataTypes"
                  :key="dtype"
                  color="orange-7"
                  outline
                  class="q-mr-xs q-mb-xs"
                  style="font-size: 10px"
                >
                  {{ dtype }}
                </q-badge>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-card-section>

    <q-card-section class="q-pt-none q-pb-sm">
      <div class="text-caption text-grey-6">
        {{
          lang === 'fr'
            ? 'Source : données publiques. Modifiable dans src/config/breaches.ts'
            : 'Source: public data. Editable in src/config/breaches.ts'
        }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { recentBreaches } from 'src/config/breaches';

const props = defineProps<{
  lang: 'fr' | 'en';
}>();

const breaches = recentBreaches;

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(props.lang === 'fr' ? 'fr-FR' : 'en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const formatRecords = (count: number): string => {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(0)}K`;
  }
  return count.toString();
};
</script>
