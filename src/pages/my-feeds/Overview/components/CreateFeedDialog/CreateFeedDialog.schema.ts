import * as yup from 'yup';

export const getCreateFeedDialogSchema = () => {
    return yup.object().shape({
        title: yup
            .string()
            .label('Title')
            .required('Title is a required field'),
        description: yup
            .string()
            .label('Description')
            .required('Description is a required field'),
        address: yup
            .string()
            .label('Address')
            .required('Address is a required field'),
        category: yup
            .string()
            .label('Category')
            .required('Category is a required field'),
        image: yup
            .string()
            .label('Image')
            .required('Image is a required field'),
    });
};

export const defaultValues = {
    title: '',
    description: '',
    image: '',
    address: '',
    category: '',
};
