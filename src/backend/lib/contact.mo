import List "mo:core/List";
import Types "../types/contact";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Nat64 "mo:core/Nat64";

module {

  public type ContactMessage = Types.ContactMessage;

  public func submitContact(
    contacts : List.List<Types.ContactMessage>,
    state : { var nextContactId : Nat },
    name : Text,
    email : Text,
    message : Text,
  ) : { #ok : Nat; #err : Text } {
    if (name == "") { return #err("Name is required") };
    if (email == "") { return #err("Email is required") };
    if (message == "") { return #err("Message is required") };
    let id = state.nextContactId;
    state.nextContactId += 1;
    contacts.add({
      id;
      name;
      email;
      message;
      timestamp = Nat64.fromNat(Int.abs(Time.now()));
    });
    #ok(id);
  };

  public func getContacts(
    contacts : List.List<Types.ContactMessage>
  ) : [Types.ContactMessage] {
    contacts.toArray();
  };

};
