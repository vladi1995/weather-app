import styles from './Content.module.css';

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles['img_section']}>
                    <div className={styles['default_info']}>
                        <h2 className={styles['default_day']}>Sunday</h2>
                        <span className={styles['default_date']}>18 September 2023 </span>
                        <div className={styles.icons}>
                            <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" />
                            <h2 className={styles['weather_temp']}>22°C</h2>
                            <h3 className={styles.cloudtxt}>Overcast Clouds</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['content_section']}>
                    <form>
                        <input
                            type="text"
                            placeholder="Search Location"
                            className={styles['input_field']}
                        />
                        <button type="submit" className={styles['btn_search']}>Search</button>
                    </form>

                    <div className={styles['day_info']}>
                        <div className={styles.content}>
                            <p className={styles.title}>NAME</p>
                            <span className={styles.value}>United Kingdom</span>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.title}>TEMP</p>
                            <span className={styles.value}>23°C</span>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.title}>HUMIDITY</p>
                            <span className={styles.value}>2%</span>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.title}>WIND SPEED</p>
                            <span className={styles.value}>2.92 Km/h</span>
                        </div>
                    </div>

                    <div className={styles['list_content']}>
                        <ul>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Sat</span>
                                <span className={styles['day_temp']}>23°C</span>
                            </li>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Sat</span>
                                <span className={styles['day_temp']}>23°C</span>
                            </li>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Sat</span>
                                <span className={styles['day_temp']}>23°C</span>
                            </li>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Sat</span>
                                <span className={styles['day_temp']}>23°C</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}