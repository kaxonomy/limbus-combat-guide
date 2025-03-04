'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { combatCategories, sinners } from './lib/data';

export default function Page() {
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [modalType, setModalType] = useState<'category' | 'sinner' | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = (id: string, type: 'category' | 'sinner') => {
    setModalOpen(id);
    setModalType(type);
  };

  const closeModal = () => {
    setModalOpen(null);
    setModalType(null);
  };

  // Get the current modal content based on ID and type
  const getModalContent = () => {
    if (!modalOpen) return null;

    if (modalType === 'category') {
      const category = combatCategories.find((cat) => cat.id === modalOpen);
      if (category) {
        return (
          <>
            <Modal.Header closeButton className="bg-dark text-white">
              <Modal.Title>{category.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
              <div 
                className="accordion-content-wrapper" 
                dangerouslySetInnerHTML={{ __html: category.content }} 
                ref={(node) => {
                  if (node && isClient) {
                    const initBootstrap = async () => {
                      const { Collapse } = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
                      node.querySelectorAll('.accordion-button').forEach((button: Element) => {
                        const target = button.getAttribute('data-bs-target');
                        if (target) {
                          const content = node.querySelector(target);
                          if (content) {
                            new Collapse(content, {
                              toggle: !button.classList.contains('collapsed')
                            });
                          }
                        }
                      });
                    };
                    initBootstrap();
                  }
                }}
              />
            </Modal.Body>
          </>
        );
      }
    } else if (modalType === 'sinner') {
      const sinner = sinners.find((s) => s.id === modalOpen);
      if (sinner) {
        return (
          <>
            <Modal.Header closeButton className="bg-dark text-white">
              <Modal.Title>{sinner.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
              <h5>Background</h5>
              <p>{sinner.background || 'No background available'}</p>

              <h5>Combat Role</h5>
              <p>{sinner.combatRole}</p>

              <h5>Sin Affinities</h5>
              <p>{sinner.sinAffinities.length > 0 ? sinner.sinAffinities.join(', ') : 'No sin affinities listed'}</p>

              <h5>Key Abilities</h5>
              <ul>
                {sinner.keyAbilities.map((ability, index) => (
                  <li key={index}>
                    <strong>{ability.name}:</strong> {ability.effect} ({ability.type})
                  </li>
                ))}
              </ul>

              <h5>Passives</h5>
              <ul>
                {sinner.passives.map((passive, index) => (
                  <li key={index}>
                    <strong>{passive.name}:</strong> {passive.effect}
                  </li>
                ))}
              </ul>

              <h5>Team Synergy</h5>
              <p>{sinner.teamSynergy || 'No team synergy available'}</p>
            </Modal.Body>
          </>
        );
      }
    }
    return null;
  };

  return (
    <Container fluid className="p-4">
      <header className="text-center mb-5">
        <h1 className="text-white">Limbus Company Combat Guide</h1>
        <p className="lead text-white">A comprehensive guide to understanding Limbus Company&apos;s combat system</p>
      </header>

      {/* Combat Categories Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-white">Combat System</h2>
        <Row xs={1} md={3} className="g-4">
          {combatCategories.map((category) => (
            <Col key={category.id}>
              <Card className="h-100 shadow-sm bg-dark text-white">
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>{category.summary}</Card.Text>
                  <Button variant="outline-light" onClick={() => openModal(category.id, 'category')}>
                    Expand
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Sinners Section */}
      <section>
        <h2 className="text-center mb-4 text-white">The 12 Sinners</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {sinners.map((sinner) => (
            <Col key={sinner.id}>
              <Card className="h-100 shadow-sm bg-dark text-white">
                <Card.Body>
                  <Card.Title>{sinner.name}</Card.Title>
                  <Card.Subtitle className="mb-2">{sinner.combatRole}</Card.Subtitle>
                  <Card.Text>Sin Affinities: {sinner.sinAffinities.join(', ')}</Card.Text>
                  <Button variant="outline-light" onClick={() => openModal(sinner.id, 'sinner')}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* The Modal */}
      <Modal show={modalOpen !== null} onHide={closeModal} size="lg" dialogClassName="modal-dark">
        {getModalContent()}
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <footer className="mt-5 py-4 bg-dark text-white text-center">
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col xs={12}>
              <p className="mb-1">&copy; LimbusCombatGuide 2025</p>
              <div className="d-flex justify-content-center align-items-center mb-1">
                <a
                  href="https://github.com/kaxonomy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white d-flex align-items-center me-2"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  kaxonomy
                </a>
                <span className="mx-1">|</span>
                <a
                  href="https://github.com/kaxonomy/limbus-combat-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white ms-2"
                >
                  Project Repo
                </a>
              </div>
              <p className="mb-1">Built with React, Bootstrap, Next.js, & Tailwind</p>
              <p className="mb-1">Hosted by Cloudflare workers</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}