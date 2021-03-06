/* @flow */
import WebSocket from 'ws';

const constants: Object = {
  MESSAGE_TYPES: {
    GREETING: 'GREETING',
    UPDATE: 'UPDATE',
    REQUEST_ALL: 'REQUEST ALL',
  },
  INITIALIZED_SERVER: (port: number): string => (
    `> Initialized a new P2P server on port ${port}.`
  ),
  INITIALIZED_CONNECTION_WITH_SOCKET: (socket: WebSocket): string => (
    socket.url
      ? `> Initialized a new connection with socket at ${socket.url}.`
      : `> Initialized a new connection with a socket.`
  ),
  CLOSED_CONNECTION_WITH_SOCKET: (socket: WebSocket): string => (
    `> Closed the connection to socket at ${socket.url}.`
  ),
  UNABLE_TO_CONNECT_TO_PEER: (socket: WebSocket): string => (
    `> Unable to establish a connection to peer at ${socket.url}.`
  ),
  INVALID_PEER: (peer: string): string => (
    `> Attempted to connect to invalid peer ${peer}.`
  ),
  RECEIVED_INVALID_MESSAGE: (message: Object) => (
    `> Received an invalid message: ${JSON.stringify(message)}.`
  ),
  GREETING: (content: string): string => (
    `> Received a greeting: ${content}`
  ),
  BLOCKCHAIN_IS_BEHIND: `> Our blockchain seems to be behind. Let's update.`,
  HASHES_MATCH: `> The hash of the received block seems to be legitimate.`,
  REQUESTING_UPDATED_BLOCKCHAIN: `> Our blockchain is way behind. Let's update everything.`,
  REPLACING_ENTIRE_BLOCKCHAIN: `> Let's rebuild our blockchain from scratch.`,
  UP_TO_DATE: `> Everything's up to date.`,
};

export default constants;