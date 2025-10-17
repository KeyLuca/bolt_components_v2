import React from 'react';
import { Container, Section, Grid, Card } from '../components/LayoutComponents';
import { HeadingScratchReveal, HeadingWordMorph } from '../components/HeadingAnimations';
import { AnimatedText } from '../components/AnimatedText';
import { SplitMediaText, OverlayMediaText, FloatingImageText } from '../components/MediaTextLayouts';

export const ComponentShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Section background="transparent" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <HeadingScratchReveal className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Neue Komponenten Showcase
            </HeadingScratchReveal>
            <AnimatedText
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
              mode="word"
              staggerDelay={30}
            >
              Hier finden Sie alle neuen modularen Komponenten mit eleganten Scroll-Reveal-Animationen, die sich nahtlos in das bestehende Design integrieren.
            </AnimatedText>
          </div>
        </Container>
      </Section>

      <Section background="transparent" padding="lg">
        <Container>
          <HeadingScratchReveal className="text-4xl font-bold text-neutral-900 mb-8 text-center">
            Überschriften-Animationen
          </HeadingScratchReveal>

          <Card padding="lg" className="bg-white mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Scratch Reveal</h3>
            <p className="text-neutral-600 mb-6">
              Eine elegante Überschriften-Animation mit Scratch/Mask-Reveal-Effekt.
            </p>
            <HeadingScratchReveal className="text-3xl font-bold text-blue-600 mb-4" duration={1200}>
              Diese Überschrift wird enthüllt
            </HeadingScratchReveal>
          </Card>

          <Card padding="lg" className="bg-white">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Word Morph</h3>
            <p className="text-neutral-600 mb-6">
              Dynamischer Wechsel zwischen verschiedenen Wörtern mit sanften Übergängen.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-neutral-700">Wir sind</span>
              <HeadingWordMorph
                words={['Innovativ', 'Kreativ', 'Zuverlässig', 'Modern']}
                className="text-3xl font-bold text-blue-600"
                interval={2500}
              />
            </div>
          </Card>
        </Container>
      </Section>

      <Section background="transparent" padding="lg">
        <Container>
          <HeadingScratchReveal className="text-4xl font-bold text-neutral-900 mb-8 text-center">
            Text-Animationen
          </HeadingScratchReveal>

          <Grid cols={2} gap="lg">
            <Card padding="lg" className="bg-white">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Word-Modus</h3>
              <AnimatedText mode="word" staggerDelay={60}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AnimatedText>
            </Card>

            <Card padding="lg" className="bg-white">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Char-Modus</h3>
              <AnimatedText mode="char" staggerDelay={20}>
                Schnelle Buchstaben-Animation für dynamische Effekte.
              </AnimatedText>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section background="transparent" padding="lg">
        <Container>
          <HeadingScratchReveal className="text-4xl font-bold text-neutral-900 mb-8 text-center">
            Bild + Text Layouts
          </HeadingScratchReveal>

          <div className="space-y-12">
            <SplitMediaText
              imageSrc="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Modern Office"
              title="Split Media Layout"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              imagePosition="left"
              variant="default"
            />

            <SplitMediaText
              imageSrc="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Team Collaboration"
              title="Umgekehrtes Layout"
              description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
              imagePosition="right"
              variant="muted"
            />

            <OverlayMediaText
              imageSrc="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200"
              imageAlt="Creative Workspace"
              title="Overlay Text auf Bild"
              description="Perfekt für Hero-Sections und visuelle Statements mit halbtransparentem Overlay für optimale Lesbarkeit."
              overlayOpacity={0.5}
              textPosition="center"
              variant="default"
            />

            <OverlayMediaText
              imageSrc="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200"
              imageAlt="Innovation"
              title="Overlay mit Blur-Effekt"
              description="Variante mit leichtem Blur für einen modernen, soften Look."
              overlayOpacity={0.4}
              textPosition="bottom"
              variant="blur"
            />

            <Card padding="lg" className="bg-white">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Floating Image Layout</h3>
              <FloatingImageText
                imageSrc="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600"
                imageAlt="Design Process"
                imagePosition="left"
                imageWidth="35%"
                variant="card"
              >
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </FloatingImageText>
            </Card>

            <Card padding="lg" className="bg-white">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Floating Right</h3>
              <FloatingImageText
                imageSrc="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600"
                imageAlt="Technology"
                imagePosition="right"
                imageWidth="40%"
                variant="default"
              >
                <p className="mb-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
                <p className="mb-4">
                  Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                </p>
                <p>
                  Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </p>
              </FloatingImageText>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="transparent" padding="lg">
        <Container>
          <HeadingScratchReveal className="text-4xl font-bold text-neutral-900 mb-4 text-center">
            Kombinations-Beispiele
          </HeadingScratchReveal>
          <AnimatedText
            className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto"
            mode="word"
          >
            Alle Komponenten lassen sich beliebig kombinieren und an Ihre Bedürfnisse anpassen.
          </AnimatedText>

          <Grid cols={3} gap="lg">
            <Card padding="lg" className="bg-white">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Modulares Design</h4>
              <AnimatedText mode="word" staggerDelay={40}>
                Jede Komponente ist eigenständig und wiederverwendbar mit klaren Props und Varianten.
              </AnimatedText>
            </Card>

            <Card padding="lg" className="bg-white">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Scroll-Reveal</h4>
              <AnimatedText mode="word" staggerDelay={40}>
                Sanfte Animationen beim Scrollen, die prefers-reduced-motion respektieren.
              </AnimatedText>
            </Card>

            <Card padding="lg" className="bg-white">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Responsive</h4>
              <AnimatedText mode="word" staggerDelay={40}>
                Alle Komponenten passen sich automatisch an verschiedene Bildschirmgrößen an.
              </AnimatedText>
            </Card>
          </Grid>
        </Container>
      </Section>
    </div>
  );
};
