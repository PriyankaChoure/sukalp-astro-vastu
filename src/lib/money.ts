// Configuration is written in rupees; the rest of the app uses integer paise.
export function rupeesToPaise(rupees: number): number {
  if (!Number.isFinite(rupees) || rupees < 0) {
    throw new RangeError("Rupees must be a finite, non-negative number.");
  }

  return Math.round(rupees * 100);
}

export function paiseToRupees(paise: number): number {
  if (!Number.isInteger(paise)) {
    throw new RangeError("Paise must be an integer.");
  }

  return paise / 100;
}

export function formatInr(paise: number): string {
  if (!Number.isInteger(paise)) {
    throw new RangeError("Paise must be an integer.");
  }

  const fractionDigits = paise % 100 === 0 ? 0 : 2;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(paise / 100);
}
