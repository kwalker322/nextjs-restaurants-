import classNames from 'classnames/bind';
import styles from './Paragraph.module.scss';

let cx = classNames.bind(styles);

const Paragraph = ({children, marginBottom}) => {
    let paragraphClasses= cx({
        paragraph: true,
        [`margin-bottom-${marginBottom}`]: marginBottom
    });
    return <p classNames={paragraphClasses}> {children} </p>

}
export default Paragraph  