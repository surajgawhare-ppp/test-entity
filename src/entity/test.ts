import { Schema } from 'mongoose';

export const tokenSchema: Schema = new Schema<any>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            trim: true,
            required: true,
        },

        token: {
            type: String,
            trim: true,
            required: true,
        },
        status: {
            type: String,
            trim: true,
            default: 'Active',
        },
    },
    {
        timestamps: true,
    },
);
