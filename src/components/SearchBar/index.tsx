import { Autocomplete, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";

import { ISingleAsset } from "@/common/types/assets";

import { useAppSelector } from "@/utils/hooks";

export const SearchBar: FC = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string | null>("");
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets
  );

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        onChange={(e: any, value: string | null) => setSelectedItem(value)}
        renderInput={(element) => (
          <TextField
            {...element}
            label="Поиск"
            InputProps={{
              ...element.InputProps,
              type: "search",
            }}
          />
        )}
        options={assetsArray.map((element: { name: string }) => element.name)}
      />
    </Stack>
  );
};
