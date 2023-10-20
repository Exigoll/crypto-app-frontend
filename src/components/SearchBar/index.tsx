import { Autocomplete, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ISingleAsset } from "@/common/types/assets";

import { useAppSelector } from "@/utils/hooks";

export const SearchBar: FC = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState<string | null>("");
  const navigate = useNavigate();
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets
  );

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={selectValue}
        onChange={(e: any, value: string | null) => {
          navigate(`single/${value}`);
          setSelectValue(null);
        }}
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
