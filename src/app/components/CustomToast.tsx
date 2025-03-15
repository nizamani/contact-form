'use client';

import { toast } from 'react-hot-toast';

export const showSuccessToast = (message: string = "Success!") => {
    toast.success(
        () => (
            <div className="flex items-center justify-between w-full">
                <span>{message}</span>
            </div>
        ),
    );
};

export const showErrorToast = (message: string = "Something went wrong!") => {
    toast.error(
        () => (
            <div className="flex items-center justify-between w-full">
                <span>{message}</span>
            </div>
        ),
    );
};
