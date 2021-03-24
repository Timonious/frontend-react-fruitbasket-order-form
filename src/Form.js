import React from "react";
import {useForm} from "react-hook-form";

function Form() {
    const {register, handleSubmit, errors, watch } = useForm({
        criteriaMode: "all",
        mode: "onChange"
    });
    const selectedReferrer = watch('orderFrequency'),
    onSubmit = (data) => {
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor='first-name'>Naam:<input
                    name='firstName'
                    id='first-name'
                    type='text'
                    ref={register({
                        required: 'Naam verplicht',
                        minLength: {
                            value: 3,
                            message: 'naam moet meer dan 2 tekens bevatten',
                        },
                    })}
                />{errors.firstName && <p className='error'>{errors.firstName.message}</p>}
                </label>
                <label htmlFor='last-name'>Achternaam:<input
                    name='lastName'
                    type='text'
                    id='last-name'
                    ref={register({
                        required: 'Naam verplicht',
                        minLength: {
                            value: 3,
                            message: 'Naam moet meer dan 2 tekens bevatten',
                        },
                    })}
                />{errors.lastName && <p className='error'>{errors.lastName.message}</p>}
                </label>
                <label htmlFor='age'>Leeftijd:<input
                    name='age'
                    type='number'
                    placeholder='0'
                    ref={register({
                        required: 'Leeftijd verplicht',
                        min: {
                            value: 18,
                            message: 'Je moet 18 zijn om te bestellen',
                        },
                    } )}
                />{errors.age && <p className='error'>{errors.age.message}</p>} </label>

                <label htmlFor='postal-code'>Postcode:<input
                    name='postalCode'
                    placeholder='1234 AB'
                    id='postal-code'
                    ref={register({required: 'Voer een postcode in'})}
                />{errors.postalCode && <p className='error'>{errors.postalCode.message}</p> }
                </label>

                <label htmlFor='house-numb'>Huisnummer zonder toevoegingen: <input
                    name='houseNumb'
                    type='text'
                    id='house-numb'
                    ref={register({required: 'Voer je huisnummer in'})}
                />{errors.houseNumb && <p className='error'>{errors.houseNumb.message}</p> }
                </label>

                <label htmlFor='orderFrequency'>Bezorgfrequentie:
                <input name='orderFrequency'
                       type='radio'
                       value='Iedere week'
                       ref={register}/>Iedere week
                <input name='orderFrequency'
                       type='radio'
                       value='Om de week'
                       ref={register} />Om de week
                <input name='orderFrequency'
                       type='radio'
                       value='Iedere maand'
                       ref={register} />Iedere maand
                <input name='orderFrequency'
                       type='radio'
                       value='Anders'
                       ref={register} />Anders
                {selectedReferrer === 'Anders' && ( <input type='text' name='diff-frequency' placeholder='hoe dan?' ref={register({required: true })}/>)}</label>

            <textarea name='extra' placeholder='Opmerkingen' ref={register}/>
                <label htmlFor='agree'>Ik ga akkoord met de voorwaarde</label>
                <input name='agree' type='checkbox' ref={register}/>
                <button name='submit' type='submit'>Verzend</button>
            </fieldset>

        </form>
    )
}

export default Form