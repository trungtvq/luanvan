package service.email;
// using EmailService's Java Library
// https://github.com/sendgrid/sendgrid-java
import com.sendgrid.*;
import java.io.IOException;

//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
public class EmailService {
    public static void main(String[] args) throws IOException {
        Email from = new Email("trung@overlead.co");
        String subject = "Sending with SendGrid is Fun";
        Email to = new Email("trungtvq.work@gmail.com");
        Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
        Mail mail = new Mail(from, subject, to, content);
        System.out.print(System.getenv("SENDGRID_API_KEY"));
        SendGrid sg = new SendGrid("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");
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            throw ex;
        }
    }
}