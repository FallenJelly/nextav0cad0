import Link from "next/link";
import styles from "../styles/Services.module.css";
import Image from "next/image";

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
        <Link key={service.id} href={`/products/${service.name}`} passHref>
            <div className={styles.service}>
                  <div className={styles.desc}>{service.desc}</div>
                <span className={styles.cat}>{service.title}</span>
                <div className={styles.media}>
                    {service.video ? (
                        <video 
                          className={styles.video}
                          src={`/img/${service.video}`} 
                          autoPlay
                          muted
                          loop
                        /> 
                    ) : (                        
                        <Image
                          src={`/img/${service.photo}`}
                          fill
                          alt=""
                          className={styles.image} /* เพิ่มคลาสเพื่อให้สามารถควบคุม CSS ได้ */
                          style={{ objectFit: "cover" }}
                        />
                    )}
                </div>
            </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
