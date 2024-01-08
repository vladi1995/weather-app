import { useGlobalContext } from '../../contexts/WeatherContext';
import styles from './ContentSection.module.css';
import { dateToDay } from '../../utils/utils';

export default function ContentSection() {
    const { town, location, current, forecast, onChangeTown, onSubmitHandler } = useGlobalContext();
    
    return (
        <div className={styles['content_section']}>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={town}
                    onChange={onChangeTown}
                    placeholder="Search Location"
                    className={styles['input_field']}
                />
                <button type="submit" className={styles['btn_search']}>Search</button>
            </form>

            {location &&
                <>
                    <div className={styles['day_info']}>
                        <div className={styles.content}>
                            <p className={styles.title}>NAME</p>
                            <span className={styles.value}>{location.name}</span>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.title}>TEMP</p>
                            <span className={styles.value}>{current['temp_c']}°C</span>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.title}>HUMIDITY</p>
                            <span className={styles.value}>{current.humidity}%</span>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.title}>WIND SPEED</p>
                            <span className={styles.value}>{current['wind_kph']} Km/h</span>
                        </div>
                    </div>

                    <div className={styles['list_content']}>
                        <ul>
                            {forecast.forecastday.map(day =>
                                <li>
                                    <img src={day.day.condition.icon} alt="condition" />
                                    <span>{dateToDay(day.date)}</span>
                                    <span className={styles['day_temp']}>{day.day['avgtemp_c']}°C</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </>
            }
        </div>
    );
}