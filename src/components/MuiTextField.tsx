import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
        ></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          helperText="Do not share your password with anyone"
        ></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="password"
          type="password"
          helperText="Do not share your password with anyone"
        ></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="password"
          disabled
          type="password"
          helperText="Do not share your password with anyone"
        ></TextField>
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
