package helper.caching;

import java.time.LocalDate;
import java.util.Date;

public interface IAddNew {
    boolean addNew(String idConversation, String requesterId, String title, String link, Date lastMessage);
}
