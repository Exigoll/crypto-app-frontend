import { FC } from "react";

import AssetsTable from "@/components/AssetsTable";

import { ITablePriceData } from "@/common/types/assets";

const TopPrice: FC<ITablePriceData> = (props: ITablePriceData): JSX.Element => {
  const { assets } = props;

  return (
    <>
      <AssetsTable assets={assets} />
    </>
  );
};

export default TopPrice;
