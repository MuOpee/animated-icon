import javax.swing.*;
import java.awt.*;
import java.awt.geom.RoundRectangle2D;
import java.awt.image.BufferedImage;

public class RoundedImageAnimation extends JPanel {
    BufferedImage image; // Your square image
    Timer timer;
    float dashPhase = 0;

    public RoundedImageAnimation(BufferedImage squareImage) {
        this.image = makeRoundedCorner(squareImage, 20); // 20 is the corner radius
        this.timer = new Timer(50, e -> {
            dashPhase++;
            repaint();
        });
        timer.start();
    }

    private BufferedImage makeRoundedCorner(BufferedImage image, int cornerRadius) {
        int w = image.getWidth();
        int h = image.getHeight();
        BufferedImage output = new BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2 = output.createGraphics();

        // Apply a rounded clip to the graphics context
        g2.setComposite(AlphaComposite.Src);
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        g2.setColor(Color.WHITE);
        g2.fill(new RoundRectangle2D.Float(0, 0, w, h, cornerRadius, cornerRadius));

        // Draw the image on top
        g2.setComposite(AlphaComposite.SrcAtop);
        g2.drawImage(image, 0, 0, null);
        g2.dispose();

        return output;
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g.create();
        // Draw the rounded image
        g2d.drawImage(image, 0, 0, this);

        // Create a dashed border for animation
        float[] dash = {10.0f};
        BasicStroke bs = new BasicStroke(3, BasicStroke.CAP_BUTT,
                BasicStroke.JOIN_ROUND, 1.0f, dash, dashPhase);
        g2d.setStroke(bs);
        g2d.setColor(Color.BLUE);
        g2d.draw(new RoundRectangle2D.Float(0, 0, image.getWidth(), image.getHeight(), 20, 20));
        g2d.dispose();
    }

    public static void main(String[] args) {
        // Load your square image
        BufferedImage squareImage = null; // Replace with actual image loading code

        JFrame frame = new JFrame("Rounded Image Animation");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new RoundedImageAnimation(squareImage));
        frame.pack();
        frame.setVisible(true);
    }
}
