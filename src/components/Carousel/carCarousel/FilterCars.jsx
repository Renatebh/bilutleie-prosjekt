import React from 'react';
import Select from '../../ui/select/Select';
import Option from '../../ui/select/Option';
import styles from './FilterCars.module.css';
import PriceOption from './filterOptions/PriceOption';
import BrandOption from './filterOptions/BrandOption';
import TypeOption from './filterOptions/TypeOption';

const FilterCars = () => {
  return (
    <form className={styles.form}>
      <PriceOption />
      <BrandOption />
      <TypeOption />
      <button className={`${styles.select} ${styles.button}`}>Søk</button>
    </form>
  );
};

export default FilterCars;
