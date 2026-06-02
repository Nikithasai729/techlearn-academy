import List "mo:core/List";
import Types "../types/contact";
import ContactLib "../lib/contact";

mixin (contacts : List.List<Types.ContactMessage>, state : { var nextContactId : Nat }) {

  public shared func submitContact(
    name : Text,
    email : Text,
    message : Text,
  ) : async { #ok : Nat; #err : Text } {
    ContactLib.submitContact(contacts, state, name, email, message);
  };

  public query func getContacts() : async [Types.ContactMessage] {
    ContactLib.getContacts(contacts);
  };

};
