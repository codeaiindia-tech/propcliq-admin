import { Formik, Form, FormikHelpers } from 'formik';

interface FormData {
    myDivField: string;
}

const MyComponent = () => {
    return (
        <Formik
            initialValues={{ myDivField: '' }}
            onSubmit={(values: FormData, { resetForm }: FormikHelpers<FormData>) => {
                console.log(values);
                resetForm();
            }}
        >
            {({ values, setValues }) => (
                <Form placeholder={'Basic Form'}>
                    {/* Use a <div> element as an input field */}
                    <div
                        contentEditable
                        className={`radio_btn-container`}
                        onInput={(e) => {
                            const newValue = 'Ashok'; // Get the text content of the div
                            setValues({ ...values, myDivField: newValue }); // Update the value of myDivField
                        }}
                    >
                        {values.myDivField}
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default MyComponent;
