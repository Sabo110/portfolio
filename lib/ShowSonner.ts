import { toast } from 'sonner';

export function showSuccessMessage(message: string) {
    return toast.success(message, {
        duration: 4000,
    });
}