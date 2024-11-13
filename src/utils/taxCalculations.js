// utils/taxCalculations.js

// Define UK tax rates and bands as constants.
// You may need to update these based on the current tax year.

const INCOME_TAX_BANDS = [
    { threshold: 18200, rate: 0 },        // Personal allowance (no tax)
    { threshold: 45000, rate: 0.16 },     // Basic rate
    { threshold: 135000, rate: 0.3 },     // Higher rate
    { threshold: 190000, rate: 0.37 },    // Higher rate
    { threshold: Infinity, rate: 0.45 }   // Additional rate
  ];  
  const SUPER_CONCESSION_RATE_INCOME_LIMIT = 250000;
  const SUPER_CONCESSION_CONTRIBUTION_CAP = 27500;
  export function calculateIncomeTax(taxableIncome, superContributions) {
    let tax = 0;
    
    if(superContributions > 0){
      const concessionalSuperContributions = superContributions >= SUPER_CONCESSION_CONTRIBUTION_CAP ? SUPER_CONCESSION_CONTRIBUTION_CAP : superContributions;
      const concessionalSuperRate = taxableIncome > SUPER_CONCESSION_RATE_INCOME_LIMIT ? 0.30 : 0.15;
      const taxOnSuper = concessionalSuperContributions * concessionalSuperRate;
  
      taxableIncome = taxableIncome - concessionalSuperContributions;
      tax = taxOnSuper;
    }

    let previousThreshold = 0;  
    for (const band of INCOME_TAX_BANDS) {
      const taxableAmount = Math.min(taxableIncome - previousThreshold, band.threshold - previousThreshold);
  
      if (taxableAmount > 0) {
        tax += taxableAmount * band.rate;
      } else {
        break;  // Stop if no more income is in this band
      }
  
      previousThreshold = band.threshold;
    }
  
    return Math.max(0, tax);  // Ensure tax isn't negative
  }
  
  const MEDICARE_LEVY = 0.02;  
  export function calculateMedicareLevy(taxableIncome) {
    const medicareLevy = taxableIncome * MEDICARE_LEVY;
  
    return Math.max(0, medicareLevy);
  }
  