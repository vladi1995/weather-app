import styles from './Main.module.css';
import ContentSection from './ContentSection/ContentSection';
import LeftSection from './LeftSection/LeftSection';

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LeftSection />
                <ContentSection />
            </div>
        </div>
    );
}