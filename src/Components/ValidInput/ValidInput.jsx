import React, {useState, useCallback, useMemo} from 'react';
import './ValidInput.css';

export const ValidInput = (props) => {
    const [isValid, setIsValid] = useState(true);

    const ValidClassName = useMemo(() => {
        if (isValid) {
            return "valid";
        }
        else {
            return "invalid";
        }
    }, [isValid]);

    const checkValid = useCallback(
        (inputText) => {
            if (props.validate (inputText)) {
                if (props.onValidChanged) {
                    props.onValidChanged (true);
                }
                setIsValid (true);
            } else {
                if (props.onValidChanged) {
                    props.onValidChanged (false);
                }
                setIsValid (false);
            }
        },
        [props.validate]);

        const onTextChanged = useCallback ((event) => {
            const inputText = event.target.value;

            if (props.onChanged) {
            props.onChanged(inputText);
            }

            checkValid (inputText);
        }, [props.onChanged, checkValid]);

    return(
        <input
        className = {`valid-input ${ValidClassName}`}
        placeholder = {props.placeholder}
        type = {props.type}
        onChange = {onTextChanged}
        />
    );
}