import {
  MessageId,
  UserId,
  ProjectId,
  OrganizationId,
  ActivityId,
  DetailObjectId,
  DetailObjectTypes
} from 'teambition-types'

export type MessageType = 'object' | 'system'

export interface MessageSchema {
  _id: MessageId
  _userId: UserId
  type: MessageType
  updated: string
  created: string
  isArchived: boolean
  isMute: boolean
  isAted: boolean
  reminder?: {
    reminderDate: string
    updated: string
  }
  isLater: boolean
  isRead: boolean
  unreadActivitiesCount: number
  boundToObjectUpdated: string
  creator: {
    _id: UserId
    name: string
    avatarUrl: string
    email?: string
  }
  title: string
  subtitle: string
  _latestActivityId?: ActivityId
  latestActivityAction?: string
  _projectId?: ProjectId
  project?: {
    _id: ProjectId
    name: string
    logo: string
  }
  _organizationId?: OrganizationId
  organization?: {
    _id: OrganizationId
    name: string
    logo: string
  }
  _objectId: DetailObjectId | ProjectId
  objectType: DetailObjectTypes | 'activity' | 'room'
  mentions?: any  // deprecated
}
