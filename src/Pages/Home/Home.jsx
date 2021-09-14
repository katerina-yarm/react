import React from "react";
import styles from './Home.module.css';

const Home = () => {

    return (
        <>
            <div className={styles.blockMain}>
                <div className={styles.contentImg}>
                    <div className={styles.text1 + ' ' + styles.textStyle}>
                        <h1>Сообщество успешных кондитеров.</h1>
                        <h2>Создай свой шедевр уже сегодня. Почувствуй себя настоящим кондитером!</h2>
                    </div>
                </div>
                <div className={styles.image1}></div>
                <div className={styles.image2}></div>
                <div className={styles.text2 + ' ' + styles.textStyle}>
                    <h3>Используй библиотеки рецептов.</h3>
                    <p>Собрание восхитительных коллекций рецептов, самых изысканных кондитерских шедевров с подробными пошаговыми инструкциями и фотографиями. Тающие во рту сладкие вкусности от французских и мировых кондитеров! Вам остается лишь точно следовать рецептам и выбирать любимые ингредиенты.</p>
                </div>
                <div className={styles.image3}></div>
                <div className={styles.text3 + ' ' + styles.textStyle}>
                    <h3>Не упусти самые интересные и современные кондитерские техники.</h3>
                    <p>Здесь все собрано воедино: неповторимый стиль, уникальные техники, накопленные годами знания. Наглядная инфографика и иллюстрированный глоссарий помогут овладеть основными кондитерскими приемами и техниками, разобраться в продуктах, кухонной утвари и инвентаре.</p>
                </div>
                <div className={styles.image4}></div>
            </div>
        </>
    );
}
export default Home;

