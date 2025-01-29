import { Schema } from 'mongoose';

export const BankWorkingDaySchema: Schema = new Schema(
    {
        date: {
            type: String,
            required: true,
        },
        isBankWorking: {
            type: Boolean,
            required: true,
        },
        detail: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    },
);
