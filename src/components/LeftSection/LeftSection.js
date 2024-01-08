import styles from './LeftSection.module.css';
import { useGlobalContext } from '../../contexts/WeatherContext';
import { dateToDay, transformDate } from '../../utils/utils';

export default function LeftSection() {
    const { town, location, current, forecast, onChangeTown, onSubmitHandler } = useGlobalContext();


    const currentDate = location ? location.localtime.slice(0, 11) : null;
    const { day, month, year } = location ? transformDate(currentDate) : '';

    return (
        <div className={styles['img_section']}>
            <div className={styles['default_info']}>
                {location &&
                    <>
                        <h2 className={styles['default_day']}>{dateToDay(forecast.forecastday[0].date)}</h2>
                        <span className={styles['default_date']}>{day} {month} {year}</span>
                    </>
                }
                <div className={styles.icons}>
                    {location && <>
                        <img src={current.condition.icon} alt="" />
                        <h2 className={styles['weather_temp']}>{current['temp_c']}°C</h2>
                        <h3 className={styles.cloudtxt}>{current.condition.text}</h3>
                    </>}
                </div>
            </div>
        </div>
    );
}