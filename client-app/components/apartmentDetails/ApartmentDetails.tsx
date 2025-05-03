"use client";

import { useEffect, useState } from "react";
import styles from "@/components/apartmentDetails/ApartmentDetails.module.css";
import ApartmentDetailsTable from "@/components/apartmentDetails/ApartmentDetailsTable";
import ProgressBar from "@/components/ProgressBar";
import API_BASE_URL from "@/config/api";

type Apartment = {
  id: string;
  name: string;
  location: string;
  description: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  compoundName: string;
  deliveryIn: number;
  price: number;
  imageUrl: string;
};

type HeaderParams = {
  id: string;
};

function ApartmentDetails(props: HeaderParams) {
  const [apartment, setApartment] = useState<Apartment>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`${API_BASE_URL}/apartments/${props.id}`)
        .then((res) => res.json())
        .then((data) => {
          setApartment(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch apartment:", err);
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [props.id]);

  if (loading)
    return (
      <div className={styles.circularProgress}>
        <ProgressBar />
      </div>
    );

  if (!apartment) return <div>Loading...</div>;

  return (
    <div className={styles.apartmentDetailsContainer}>
      <div>
        <img
          src={apartment.imageUrl}
          alt={apartment.name}
          className={styles.apartmentImage}
        />
      </div>
      <div className={styles.apartmentDetails}>
        <h1>{apartment.name}</h1>
        <p>{apartment.location}</p>
        <p className={styles.apartmentDescription}>{apartment.description}</p>
        <ApartmentDetailsTable
          area={apartment.area}
          bedrooms={apartment.bedrooms}
          bathrooms={apartment.bathrooms}
          compoundName={apartment.compoundName}
          deliveryIn={apartment.deliveryIn}
        />
        <h3 className={styles.apartmentPrice}>
          Price: {apartment.price.toLocaleString()} EGP
        </h3>
      </div>
    </div>
  );
}

export default ApartmentDetails;
