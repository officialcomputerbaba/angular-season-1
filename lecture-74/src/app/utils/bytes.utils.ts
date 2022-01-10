export function formatBytes(bytes?: number, decimals = 2) {
  if (!bytes || bytes === 0) return { size: 0, unit: "Bytes" };

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const unitIndex = Math.floor(Math.log(bytes) / Math.log(k));

  const unit = units[unitIndex];

  const size = parseFloat((bytes / Math.pow(k, unitIndex)).toFixed(dm));

  return {
    size,
    unit,
  };
}
