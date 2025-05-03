import { useRef, useState } from "react";
import styles from "@/components/header/SearchBar.module.css";
import { TextField, InputAdornment } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

type HeaderParams = {
  onSearchKeyChange: (value: string) => void;
};

function SearchBar(props: HeaderParams) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTimeout) clearTimeout(searchTimeout);

    const timer = setTimeout(() => {
      props.onSearchKeyChange(event.target.value);
    }, 500);

    setSearchTimeout(timer);
  };

  return (
    <div className={styles.searchContainer}>
      <p className={styles.overlayText}>Find it. Love it. Live in it.</p>
      <TextField
        variant="outlined"
        placeholder="Search by unit name..."
        size="small"
        fullWidth
        inputRef={searchRef}
        onChange={handleSearchChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
}

export default SearchBar;
