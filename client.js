const {Kafka} = require("kafkajs");

exports.kafka = new Kafka({
   clientId:"my-app",
   brokers: ["192.168.2.7:9092"],   // change ip
});