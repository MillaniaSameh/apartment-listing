"use client";

import { useState } from "react";
import styles from "./page.module.css";
import NavBar from "@/components/header/NavBar";
import SearchBar from "@/components/header/SearchBar";
import AddApartment from "@/components/AddApartment";
import ApartmentList from "@/components/apartmentList/ApartmentList";

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const handleApartmentAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleSearchKeyChanged = (value: string) => {
    setSearchKey(value);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <NavBar />
        <SearchBar onSearchKeyChange={handleSearchKeyChanged} />
        <AddApartment onApartmentAdded={handleApartmentAdded} />
      </div>
      <ApartmentList refreshKey={refreshKey} searchKey={searchKey} />
    </div>
  );
}
