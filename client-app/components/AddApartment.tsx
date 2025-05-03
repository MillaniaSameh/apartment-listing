"use client";

import { useState, useRef } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "@/components/AddApartment.module.css";
import API_BASE_URL from "@/config/api";

function AddApartment(props: { onApartmentAdded: () => void }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const unitNameRef = useRef<HTMLInputElement>(null);
  const compoundNameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLInputElement>(null);
  const deliveryInRef = useRef<HTMLInputElement>(null);
  const bedroomsRef = useRef<HTMLInputElement>(null);
  const bathroomsRef = useRef<HTMLInputElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      name: unitNameRef.current?.value,
      compoundName: compoundNameRef.current?.value,
      location: locationRef.current?.value,
      description: descriptionRef.current?.value,
      price: priceRef.current?.value,
      area: areaRef.current?.value,
      deliveryIn: deliveryInRef.current?.value,
      bedrooms: bedroomsRef.current?.value,
      bathrooms: bathroomsRef.current?.value,
      imageUrl: imageUrlRef.current?.value,
    };

    setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/apartments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit apartment");
        }

        props.onApartmentAdded();
        handleClose();
      } catch (error) {
        console.error("Error submitting apartment:", error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a Unit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: handleSubmit,
          },
        }}
      >
        <DialogTitle>Unit Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the unit details below to add a new apartment listing.
          </DialogContentText>
          <div className={styles.container}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="unitName"
              name="unitName"
              label="Unit Name"
              type="text"
              fullWidth
              variant="standard"
              inputRef={unitNameRef}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="compoundName"
              name="compoundName"
              label="Compound Name"
              type="text"
              fullWidth
              variant="standard"
              inputRef={compoundNameRef}
            />
          </div>
          <TextField
            autoFocus
            required
            margin="dense"
            id="location"
            name="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            inputRef={locationRef}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            inputRef={descriptionRef}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="Price (EGP)"
            type="number"
            fullWidth
            variant="standard"
            inputRef={priceRef}
          />
          <div className={styles.container}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="area"
              name="area"
              label="Unit Area"
              type="number"
              fullWidth
              variant="standard"
              inputRef={areaRef}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="deliveryIn"
              name="deliveryIn"
              label="Delivery In (Year)"
              type="number"
              fullWidth
              variant="standard"
              inputRef={deliveryInRef}
            />
          </div>
          <div className={styles.container}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="bedrooms"
              name="bedrooms"
              label="Number of Bedrooms"
              type="number"
              fullWidth
              variant="standard"
              inputRef={bedroomsRef}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="bathrooms"
              name="bathrooms"
              label="Number of Bathrooms"
              type="number"
              fullWidth
              variant="standard"
              inputRef={bathroomsRef}
            />
          </div>
          <TextField
            autoFocus
            required
            margin="dense"
            id="imageUrl"
            name="imageUrl"
            label="Image URL"
            type="text"
            fullWidth
            variant="standard"
            inputRef={imageUrlRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {!loading && <Button type="submit">Save</Button>}
          {loading && (
            <div style={{ margin: "1rem" }}>
              <CircularProgress size="30px" />
            </div>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddApartment;
