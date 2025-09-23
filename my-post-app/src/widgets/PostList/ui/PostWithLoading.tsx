import React from 'react';
import { PostList } from '../PostList';
import { withLoading } from '../../../shared/lib/hoc/withLoading';

export const PostWithLoading = withLoading(PostList);