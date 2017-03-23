pragma solidity ^0.4.0;

contract ProofOfDelivery {
        address owner;
        struct Parcel {
            uint status;
            uint payment;
        }
        mapping(string => Parcel) parcels;
        event StatusChanged(string trackingCode, uint status);
        event ParcelCreated(string trackingCode);
        function ProofOfDelivery() {
            owner = msg.sender;
        }
        function trackParcel(string trackingCode) payable returns(bool) {
                if (parcelExists(trackingCode)) throw;
                if (msg.sender != owner && msg.value < 100 finney) throw;
                parcels[trackingCode] = Parcel({status: 1, payment: msg.value});
                ParcelCreated(trackingCode);
                return true;
        }
        function sendEtherToOwner() returns(uint) {
            if (msg.sender != owner) return;
            var balance = this.balance;
            owner.send(this.balance);
            return balance;
        }
        function getStatus(string trackingCode) constant returns(uint) {
            return parcels[trackingCode].status;
        }
        function setStatus(string trackingCode, uint status) returns(bool) {
            if (msg.sender != owner) return;
            if (!parcelExists(trackingCode)) return;
            parcels[trackingCode].status = status;
            StatusChanged(trackingCode, status);
            return true;
        }
        function parcelExists(string trackingCode) constant returns(bool) {
            if (parcels[trackingCode].status == 0) {
                return false;
            } else {
                return true;
            }
        }
        function kill() {
            if (msg.sender != owner) return;
            selfdestruct(owner);
        }
}
