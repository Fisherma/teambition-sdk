import { QueryToken } from 'reactivedb'
import { SDK, CacheStrategy } from '../../SDK'
import { Http } from '../../Net'
import { SDKFetch } from '../../SDKFetch'
import { FileSchema } from '../../schemas/File'
import { FileId } from 'teambition-types'

export function getFileFetch(
  this: SDKFetch,
  fileId: FileId,
  query?: any
): Http<FileSchema> {
  return this.get<FileSchema>(`works/${fileId}`, query)
}

SDKFetch.prototype.getFile = getFileFetch

declare module '../../SDKFetch' {
  interface SDKFetch {
    getFile: typeof getFileFetch
  }
}

export function getFile (
  this: SDK,
  fileId: FileId,
  query?: any
): QueryToken<FileSchema> {
  query = query || { }
  return this.lift<FileSchema>({
    request: this.fetch.getFile(fileId, query),
    tableName: 'File',
    cacheValidate: CacheStrategy.Cache,
    query: {
      where: { _id: fileId }
    },
    assocFields: {
      creator: ['_id', 'name', 'avatarUrl']
    },
    excludeFields: ['class']
  })
}

SDK.prototype.getFile = getFile

declare module '../../SDK' {
  interface SDK {
    getFile: typeof getFile
  }
}
