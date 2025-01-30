import { Schema } from 'mongoose';

export const tokenSchema: Schema = new Schema(
    {
        mongowa: {
            type: String,
        },
        businessId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        provider: {
            type: String,
        },
        merchantStatus: {
            type: String,
        },
        expectedAnnualCardVolume: {
            type: Number,
            required: false,
        },
        securityInfo: {
            userAgent: {
                type: String,
                required: false,
            },
            ipAddress: {
                type: String,
                required: false,
            },
            timestamp: {
                type: Date,
                required: false,
            },
        },
        rejectionCode: {
            type: String,
            required: false,
        },
        rejectionReason: {
            type: String,
            required: false,
        },
        pciCompliance: [
            {
                finixComplianceId: {
                    type: String,
                    required: false,
                },
                SAQ_SubmissionGracePeriodExpiry: {
                    type: Date,
                    required: false,
                },
                SAQ_SubmittedBy: {
                    type: Schema.Types.ObjectId,
                    required: false,
                },
                SAQ_SubmittedByTitle: {
                    type: String,
                    required: false,
                },
                unsignedComplianceForm: {
                    SAQ_FileId: {
                        type: String,
                        required: false,
                    },
                    cloudFilePath: {
                        type: String,
                        trim: true,
                        required: false,
                    },
                    s3BucketURL: {
                        type: String,
                        required: false,
                    },
                },
                signedComplianceForm: {
                    SAQ_FileId: {
                        type: String,
                        required: false,
                    },
                    cloudFilePath: {
                        type: String,
                        trim: true,
                        required: false,
                    },
                    s3BucketURL: {
                        type: String,
                        required: false,
                    },
                },
                SAQ_Expiry: {
                    type: Date,
                    required: false,
                },
                SAQ_status: {
                    type: String,
                    required: false,
                },
                createdAt: {
                    type: Date,
                    required: false,
                },
                updatedAt: {
                    type: Date,
                    required: false,
                },
            },
        ],
    },
    {
        timestamps: true,
    },
);
