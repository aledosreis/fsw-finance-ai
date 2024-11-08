import { TransactionType } from "@prisma/client";

export type TransacionPercentagePerType = {
  [key in TransactionType]: number;
};
