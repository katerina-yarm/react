import React, { useMemo } from 'react';

export const FormError = (props) => {
    const errorsWithValueArray = useMemo(() => {
        var filteredErrors= props.errors.filter (error => {
            if (error) {
                return true;
            } else {
                return false;
            }
        });
        return filteredErrors;
    }, [props.errors]);

    return (
        <span>
            {errorsWithValueArray.map((error, index) =>
                <span key = {index}>
                    {error}
                    <br />
                </span>
            )}
        </span>
    );
}