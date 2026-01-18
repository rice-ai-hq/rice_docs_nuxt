<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const version = computed(() => {
  if (route.path.startsWith('/v1')) return 'v1.x'
  if (route.path.startsWith('/v2')) return 'v2.x'
  return 'v2.x'
})

const items = [
  [{
    label: 'v2.x',
    click: () => router.push('/v2/1.getting-started/1.introduction')
  }],
  [{
    label: 'v1.x',
    click: () => router.push('/v1')
  }]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-end' }">
    <UButton
      color="gray"
      variant="ghost"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      {{ version }}
    </UButton>
  </UDropdown>
</template>
