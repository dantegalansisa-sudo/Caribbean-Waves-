import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';
import { fadeInUp } from '../utils/easings';
import './TeamSection.css';

const ceo = {
  name: 'Stephanie',
  role: 'CEO & Fundadora',
  image: '/imagenes/stephanie.png',
  instagram: '@caribbeanwaves_',
  bio: '¡Hola, viajeros! Soy Stephanie, la cara detrás de Caribbean Waves Tours & Travel. Me apasiona ayudarte a convertir tus sueños de viaje en recuerdos inolvidables. Con más de 3 años en el mundo del turismo y Licenciada en Administración de Empresas Turística y Hotelera, me especializo en diseñar experiencias únicas para familias, parejas y viajeros frecuentes, tanto en nuestro hermoso Caribe como en destinos internacionales. Más que un servicio, te ofrezco acompañamiento personalizado, asesoría honesta y un compromiso total con tu tranquilidad y disfrute.',
};

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="team" ref={ref}>
      <div className="section-container">
        <div className="team__header">
          <span className="section-eyebrow">Quién Te Atiende</span>
          <RevealText tag="h2" className="section-title">
            La Persona Detrás De Tu Viaje
          </RevealText>
          <p className="section-subtitle">
            Conoce a quien hace posible que cada experiencia sea inolvidable.
          </p>
        </div>

        <div className="team__content">
          <motion.div
            className="team-card team-card--leadership"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="team-card__image-wrap">
              <img
                src={ceo.image}
                alt={`${ceo.name} — ${ceo.role} de Caribbean Waves`}
                className="team-card__image"
                loading="lazy"
              />
              <div className="team-card__image-accent" />
            </div>
            <div className="team-card__body">
              <div className="team-card__member">
                <span className="team-card__role">{ceo.role}</span>
                <h3 className="team-card__name">{ceo.name}</h3>
                <p className="team-card__bio">{ceo.bio}</p>
              </div>
              <a
                href={`https://instagram.com/${ceo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="team-card__social"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                {ceo.instagram}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
