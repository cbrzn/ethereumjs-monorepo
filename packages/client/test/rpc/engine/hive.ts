import tape from 'tape'
import { params, baseRequest, setupChain } from '../helpers'
import genesisJSON from '../../testdata/geth-genesis/hive.json'

const data = {
  headBlockHash: '0x67ead97eb79b47a1638659942384143f36ed44275d4182799875ab5a87324055',
  safeBlockHash: '0x67ead97eb79b47a1638659942384143f36ed44275d4182799875ab5a87324055',
  finalizedBlockHash: '0x67ead97eb79b47a1638659942384143f36ed44275d4182799875ab5a87324055',
}

// Invalid Terminal Block in ForkchoiceUpdated: Client must reject ForkchoiceUpdated directives if the referenced HeadBlockHash does not meet the TTD requirement.
tape(`forkchoiceUpdate: invalid terminal block`, async (t) => {
  // Execution specification:
  // {payloadStatus: {status: INVALID_TERMINAL_BLOCK, latestValidHash: null, validationError: errorMessage | null}, payloadId: null}
  // either obtained from the Payload validation process or as a result of validating a PoW block referenced by forkchoiceState.headBlockHash
  const { server } = await setupChain(genesisJSON, 'kiln', { engine: true })

  const req = params('engine_forkchoiceUpdatedV1', [data, null])
  const expectRes = (res: any) => {
    t.equal(res.body.result.payloadStatus.status, 'INVALID_TERMINAL_BLOCK')
  }
  await baseRequest(t, server, req, 200, expectRes)
})

// Invalid Terminal Block in NewPayload: Client must reject NewPayload directives if the referenced ParentHash does not meet the TTD requirement.
tape('newPayload: invalid terminal block', async (t) => {
  const { server } = await setupChain(genesisJSON, 'kiln', { engine: true })
  const payloadData = [
    {
      parentHash: '0x67ead97eb79b47a1638659942384143f36ed44275d4182799875ab5a87324055',
      feeRecipient: '0x0000000000000000000000000000000000000000',
      stateRoot: '0x84308e7d0abf860412f4a0c6fc25709a6e9eaba20a0d085a0344d271f40109ec',
      receiptsRoot: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
      logsBloom:
        '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      prevRandao: '0x0000000000000000000000000000000000000000000000000000000000000000',
      blockNumber: '0x1',
      gasLimit: '0x2fefd8',
      gasUsed: '0x0',
      timestamp: '0x1235',
      extraData: '0x' + Buffer.alloc(97).toString('hex'),
      baseFeePerGas: '0x3b9aca00',
      blockHash: '0xfdb2ebe65d6cc70f97e5de775c8445f34b7a2566bfe708eb7c2beb8684df85a9',
      transactions: [],
    },
  ]

  // Execution specification:
  // {status: INVALID_TERMINAL_BLOCK, latestValidHash: null, validationError: errorMessage | null}
  // if terminal block conditions are not satisfied
  const req = params('engine_newPayloadV1', payloadData)
  const expectRes = (res: any) => {
    t.equal(res.body.result.payloadStatus.status, 'INVALID_TERMINAL_BLOCK')
  }
  await baseRequest(t, server, req, 200, expectRes)
})

tape.only('forkchoiceUpdate: unknownn block hash', async (t) => {
  const { server } = await setupChain(genesisJSON, 'kiln', { engine: true })
  const req = params('engine_forkchoiceUpdatedV1', [
    {
      ...data,
      headBlockHash: '0xd19ed071413fcb810ebe7bb9844fee018c368879a0dd6e162f512aef72069972',
    },
  ])
  const expectRes = (res: any) => {
    t.equal(res.body.result.payloadStatus.status, 'SYNCING')
  }
  await baseRequest(t, server, req, 200, expectRes)
})
