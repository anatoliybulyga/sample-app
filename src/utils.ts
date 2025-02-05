export const getItemLabel = (itemLabel: string) => {
  if (!itemLabel.includes(':')) return itemLabel;

  return itemLabel.split(':')[1].split("_").join(" ").toLowerCase();
}

export const getItemValueLabel = (itemValueLabel: string) => {
  if (!itemValueLabel.endsWith('_value')) return itemValueLabel;

  return itemValueLabel.split('_')[0].split("_").join(" ").toLowerCase();
}
