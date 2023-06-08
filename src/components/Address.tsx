import React, {useState} from 'react';
import '../address.scss';


type Props = {
    className?: string
}
// @ts-ignore
const Address: React.FC<Props> = (props) => {

    const [plainData, setPlainData] = useState<any>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [addresses, setAddresses] = useState<Array<any>>([]);

    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "d2a1cba65c202dd51a79907872dc6ec01ad0750d";

    return (
        <div className = 'address-container'>
         <div className = 'address-description'>
        <h1>Поиск адресов</h1>
        <p>Введите интересующий вас адрес</p>
         </div>
        <div className = 'input-container'>
            <input minLength={3} className = 'input-field' placeholder='Введите интересующий вас адрес' onChange = {onChangeHandler}/>
            <button className = 'input-button' onClick = {onClickHandler}>
                <span className = 'search-icon'></span>
                <p>Поиск</p>
            </button>
        </div>
            <div className = 'results-container'>
                <h1 className = 'results-description'>Адреса</h1>
                {addresses && addresses.map(element => {
                    return <div className = 'results-element'>
                        <p className = 'results-text'>{element.value}</p>
                        <br/>
                    </div>
                })}
            </div>
        </div>
       )

    function onClickHandler() {

        console.log(searchValue);

        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: searchValue})
        }
        // @ts-ignore
        fetch(url, options)
            .then(response => response.text())
            .then(result =>  setPlainData(JSON.parse(result)))
            .catch(error => console.log("error", error));

        if(plainData) {
             setAddresses(plainData.suggestions);
        }

        console.log(addresses);
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setSearchValue(e.target.value);
    }
}

export default Address;