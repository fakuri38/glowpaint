import React, { useState } from "react";
import { PackageCard } from "./PackageCard";
import styles from "./PackageSelection.module.css";

const packages = [
  { 
    title: "GLOW-RIOUS STARTER",
    features: [
      "LED Stick",
      "Refreshments",
      "Drawstring Bag",
      "Face Paint Service",
      "Lucky Draw Ticket",
      "Wristband",
    ],
    price: "15",
  },
  {
    title: "GLOW-RIOUS LITE",
    features: [
      "T-Shirt",
      "LED Stick",
      "Refreshments",
      "Drawstring Bag",
      "Face Paint Service",
      "Lucky Draw Ticket",
      "Wristband",
    ],
    price: "35",
  },
  {
    title: "GLOW-RIOUS PRO",
    features: [
      "T-Shirt",
      "LED Stick",
      "Refreshments",
      "Drawstring Bag",
      "Face Paint Service",
      "Lucky Draw Ticket",
      "Wristband",
      "Medal",
    ],
    price: "50",
  },
];

export const PackageSelection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <main>
        <div >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/857d67c43adf39f614a6aeb5a2c0bcf1cd38528c6519dbb621de78f36c102cd0?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
            className={styles.bannerImage}
            alt="Event banner"
          />
        </div>

        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              features={pkg.features}
              price={pkg.price}
            />
          ))}
        </div>

        <form className={styles.selectionForm}>
          <div className={styles.formField}>
            <label htmlFor="packageSelect" className={styles.fieldLabel}>
              Your selected package:
            </label> 
            <div className={styles.selectWrapper}>
              <select
                id="packageSelect"
                className={styles.packageSelect}
                value={selectedPackage || ""}
                onChange={(e) => setSelectedPackage(e.target.value)}
                aria-label="Select a package"
              >
                <option value="" disabled>Select one package</option>
                {packages.map((pkg, index) => (
                  <option key={index} value={pkg.title}>
                    {pkg.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>Price: </label>
            <div className={styles.priceDisplay}>
              RM{" "}
              {selectedPackage
                ? packages.find((pkg) => pkg.title === selectedPackage)?.price
                : "XX.XX"}
            </div>
          </div>
        </form>

    </main>
  );
};

