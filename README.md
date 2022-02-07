# Notenrechner

Webanwendung zur Berechnung der Bewertung von Abschlussarbeiten. Optimiert für mobile Geräte.

- Als GitHub Page probieren: https://tigion.github.io/htw-webapp-grade-calculator/

![Screenshot im Webbrwoser](README-screenshot.png)

## Hinweise

Die Berechnung erfolgt ganzzahlig, mit drei Nachkommastellen, in den JavaScript Klassen `Calculation` und `Grade`. Die Oberfläche ist mit HTML/CSS und Bootstrap (CSS) umgesetzt.

### Berechnung

| (Teil)Note | Berechnung |
| ---- | ---------- |
| Schriftliche Arbeit | `(1. Gutachten + 2. Gutachten) / 2` |
| Verteidigung | `(Vortrag + Diskussion) / 2` |

| Gesamtnote | Berechnung |
| ---- | ---------- |
| Informatik/Mathematik<br />(2/3 + 1/3) | `(2x Schriftliche Arbeit + Verteidigung) / 3` |
| Wirtschaftswissenschaften<br />(3/4 + 1/4) | `(3x Schriftliche Arbeit + Verteidigung) / 4` |

- Bei den Teilnoten für die **Schriftliche Arbeit**, der **Verteidigung** und der **Gesamtnoten** für die Bewertung der Abschlussarbeit wird für das Ergebnis alles nach der ersten Nachkommastelle abgeschnitten.
- Zur Kontrolle steht das unbeschnittene Ergebnis unter der jeweiligen Note.
