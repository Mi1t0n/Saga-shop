import {setupWorker} from 'msw'
import {endpoints} from "./rest";

const worker = setupWorker(...endpoints)

worker.start()